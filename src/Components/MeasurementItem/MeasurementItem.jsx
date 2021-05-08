import React from "react";
import PropTypes from "prop-types";
import Cpu from "./cpu.svg";
import Gpu from "./graphics-card.svg";
import Disk from "./harddisk.svg";
import Motherboard from "./motherboard.svg";
import Ram from "./ram-memory.svg";
import PowerSupply from "./power-supply.svg";

const iconForMeasurement = {
  cpu: Cpu,
  gpu: Gpu,
  disk: Disk,
  motherboard: Motherboard,
  ram: Ram,
  powersupply: PowerSupply,
};

const Icon = (icon) => {
  const IconForMeasurement = iconForMeasurement[icon];
  return (
    <img src={IconForMeasurement} alt={icon} className="measurement-icon" />
  );
};

const MeasurementItem = ({ icon, title, desc }) => {
  return (
    <>
      <div className="col-4 text-center">{Icon(icon)}</div>
      <div className="col-8">
        <h4>{title}</h4>
        <p className="text-justify">{desc}</p>
      </div>
    </>
  );
};

MeasurementItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default MeasurementItem;
