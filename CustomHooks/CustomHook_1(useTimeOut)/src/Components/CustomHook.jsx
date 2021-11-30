import { useTimeout } from "./useTimeout";

export default function () {
  const isReady = useTimeout(5000);

  return (
    <div>
      <h1>Custom Timer Hook </h1>
      {isReady && "Ready appear after 5 secs"}
    </div>
  );
}
