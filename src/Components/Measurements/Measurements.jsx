import React from "react";
import MeasurementItem from "../MeasurementItem";

const Measurements = () => {
  return (
    <section className="container" id="components">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="display-3 fw-bold my-4">
            Componentes a tomar en cuenta
          </h1>
        </div>
        <div className="col-12 col-md-6">
          <div className="row d-flex align-items-center my-3">
            <MeasurementItem
              icon="cpu"
              title="CPU"
              desc="Se trata de la Unidad Central de Procesamiento uno de los componentes vitales que te vas a encontrar en tu ordenador, tu smartphone o tu tableta o portátil, e incluso en relojes y prácticamente cualquier dispositivo electrónico. Sin él, simplemente no podrían funcionar."
            />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="row d-flex align-items-center my-3">
            <MeasurementItem
              icon="gpu"
              title="GPU"
              desc="GPU es un coprocesador dedicado al procesamiento de gráficos para aligerar la carga de trabajo del procesador central en aplicaciones como los videojuegos o aplicaciones 3D interactivas"
            />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="row d-flex align-items-center my-3">
            <MeasurementItem
              icon="ram"
              title="RAM"
              desc="La memoria RAM es la memoria principal de un dispositivo, esa donde se almacenan de forma temporal los datos de los programas que estás utilizando en este momento. Sus siglas traducidas al español significan Memoria de Acceso Aleatorio, y es un tipo de memoria que te puedes encontrar en cualquier dispositivo, desde ordenadores de sobremesa hasta teléfonos móviles."
            />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="row d-flex align-items-center my-3">
            <MeasurementItem
              icon="disk"
              title="Disco Duro"
              desc="Los discos duros son dispositivos de almacenamiento de datos en los que podemos guardar cualquier tipo de información digital. Ya sean fotografías, vídeos, archivos de texto o programas informáticos. El disco duro es una de las partes más importantes de cualquier sistema informático."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Measurements;
