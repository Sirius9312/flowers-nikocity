import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FlowerByIdFlower } from "../type/FlowerByIdFlower";
import { Loader } from "../components/Loader";
import { SelectedFlower } from "../components/SelectedFlower/SelectedFlower";
import $ from 'jquery';

export const SelectedFlowerPage = () => {
  const { flowerId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectFlower, setSelectFlower] = useState<FlowerByIdFlower | null>(null);

  useEffect(() => {
    if (flowerId) {
      setError('');
      setLoading(true);

      $.ajax({
        type: "POST",
        url: "http://www.flowers-nikocity.ho.ua/api/flowers/flower.php",
        data: {flowerId: flowerId},
        success: function (data){
          setSelectFlower(JSON.parse(data))
          setLoading(false);
        },
        error:function (xhr, ajaxOptions, thrownError){
          alert("Error: "+thrownError);
        }
      });
    }
  }, [flowerId])

  return <section className="selected-flower-page">
    <div className="container">
      <div className="selected-flower-page__content">
      {
        loading && <Loader />
      }

      {
        error && <h1>{error}</h1>
      }

      {
        !loading && !error && selectFlower && (
          <SelectedFlower selectFlower={selectFlower}/>
        )
      }
      </div>
    </div>
  </section>;
};
