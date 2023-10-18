import ReactDOM from "react-dom";

type NoteProps = {
  title?: string;
  message?: string;
  status?: string;
};

function Notification(props: NoteProps) {
  let background: string;

  if (props.status === "pending") {
    background = "bg-blue-400";
  } else if (props.status === "success") {
    background = "bg-green-400";
  } else {
    background = "bg-red-400";
  }

  const portalRoot = document.getElementById("notification");
  if (!portalRoot) {
    // Handle the case where the portal root element is not found
    return null;
  }

  return ReactDOM.createPortal(
    <div className={`${background} w-[80%] p-5 mx-auto`}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </div>,
    portalRoot
  );
}

export default Notification;
