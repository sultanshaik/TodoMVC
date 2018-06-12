import React from "react";
import {configure , shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import TaskList from "../src/TaskList.js";
import TodoItem from "../src/TodoItem.js";

configure({adapter : new Adapter()});

describe("This function tests if the taskList",()=>{

    let wrapper;

    beforeEach(()=>
      {
        wrapper = shallow(<TaskList taskList={[]} />);
      }
    )

    it("Should render no elements", () => {

        expect(wrapper.find(<TodoItem />)).toHaveLength(0);

    });
  }
);
