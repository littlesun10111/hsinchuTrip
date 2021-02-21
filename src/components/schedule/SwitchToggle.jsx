import React from "react";

import { Switch } from "antd";
const SwitchToggle = ({ onOpen }) => {
  // const handleChange=(checked)=>{console.log(`${checked}`)}
  return (
    <div className="d-flex align-items-center">
      <Switch
        defaultChecked
        onChange={onOpen}
        checkedChildren="顯示"
        unCheckedChildren="關閉"
        id="switch"
        className="mr-2"
      />
      <label htmlFor="switch" className="mb-0">
        選取的景點
      </label>
    </div>
  );
};
export default SwitchToggle;
