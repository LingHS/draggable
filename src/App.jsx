import React, { useState } from "react";
import { Card } from "./compontent";
import { useDraggable } from "./compontent/darggable";
import "./App.css";

const list = [
  {
    src:
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598788142944&di=219e8201a583505e4ca9487406c92ec7&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F22%2F59%2F19300001325156131228593878903.jpg",
    title: "123",
  },
  {
    src:
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598788182638&di=c6ca8a961d7a27943630a30af1f3d1f2&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg",
    title: "456",
  },
  {
    src:
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598788182638&di=c6ca8a961d7a27943630a30af1f3d1f2&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg",
    title: "789",
  },
];

function cls(def, ...conditions) {
  const list = [def];
  conditions.forEach((cond) => {
    if (cond[0]) {
      list.push(cond[1]);
    }
  });
  return list.join(" ");
}
function DraggableList({ list }) {
  const { dragList, createDropperProps, createDraggerProps } = useDraggable(
    list
  );
  return dragList.map((item, i) => {
    if (item.type === "BAR") {
      return <Bar id={i} {...createDropperProps(i)} key={item.id} />;
    }
    return (
      <Draggable {...createDraggerProps(i, item.id)}>
        <Card {...item.data} />
      </Draggable>
    );
  });
}

function Draggable({ children, eventHandlers, dragging, id }) {
  return (
    <div
      {...eventHandlers}
      className={cls("draggable", [dragging === id, "dragging"])}
      draggable={true}
    >
      {children}
    </div>
  );
}

function Bar({ id, dragging, dragOver, eventHandlers }) {
  if (id === dragging + 1) {
    return null;
  }

  return (
    <div
      {...eventHandlers}
      className={cls("draggable--bar", [dragOver === id, "dragover"])}
    >
      <div
        className="inner"
        style={{
          height: id === dragOver ? "80px" : "0px",
        }}
      />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <DraggableList list={list} />
    </div>
  );
}

export default App;
