import React from "react";
import Header from "../components/Header";
import {
  ColorPickerComponent,
  Inject,
} from "@syncfusion/ej2-react-inputs";
import { colorMappingData, rangeColorMapping } from "../data/dummy";

const ColorPicker = () => {
  const change=(args)=>{
    document.getElementById('preview').style.backgroundColor=args.currentValue.hex;
  }

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id='preview'/>
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div className="">
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Palette</p>
            <ColorPickerComponent id="inline-palette" mode="Palette" modeSwitcher={false} inline showButtons={false} change={change} />
          </div>
          <div className="">
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
            <ColorPickerComponent id="inline-picker" mode="Picker" modeSwitcher={false} inline showButtons={false} change={change}/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ColorPicker;
