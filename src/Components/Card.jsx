import { Icon } from "./Icon";

export function Card({ index, onPlay, player }) {
  let icon = <Icon />;
  if (player === "X") {
    icon = <Icon iconName="cross" />;
  } else if (player === "O") {
    icon = <Icon iconName="circle" />;
  }

  return (
    <div
      className="card"
      onClick={() => {
        onPlay(index);
      }}
    >
      {icon}
    </div>
  );
}
