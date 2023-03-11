import React from "react";
import useData from "../../../hooks/use-data";
import { generalSpecs, techSpecs } from "../../../lib/car-data-fields";
import Title from "../../ui-elements/title/title";

const DataResult = () => {
  const { currentCarData } = useData();

  return (
    <article className="flex flex-col gap-12 items-center justify-center">
      <h1 className="font-bold text-5xl">פרטי רכב</h1>
      <h2 className="font-bold text-3xl">
        {currentCarData.tozeret_nm} ({currentCarData.shnat_yitzur}) -{" "}
        {currentCarData.kinuy_mishari}
      </h2>
      <div className="grid-cols-1 md:grid-cols-2 grid gap-2 w-full text-lg">
        {generalSpecs.map((ts, i) => (
          <span key={i * 100}>
            <b>{ts.label}:</b> {controlValue((currentCarData as any)[ts.key])}
          </span>
        ))}
      </div>
      <h2 className="font-bold text-3xl text-center">פרטים טכניים:</h2>
      <div className="grid-cols-1 md:grid-cols-2 grid gap-2 w-full text-lg">
        {techSpecs.map((ts, i) => (
          <span key={i}>
            <b>{ts.label}:</b> {controlValue((currentCarData as any)[ts.key])}
          </span>
        ))}
      </div>
    </article>
  );
};

function controlValue(value: any): string {
  return value ? value : <span className="text-red-400">ללא / לא זמין</span>;
}

export default DataResult;
