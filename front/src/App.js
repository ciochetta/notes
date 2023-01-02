import React from "react";
import "./app.css";
import MDEditor from "@uiw/react-md-editor";

export default function App() {
	const [value, setValue] = React.useState("**Hello world!!!**");
	return (
		<div className="container bg">
			<br />
			<MDEditor value={value} onChange={setValue} autoSave />

			<br />
			<br />

			<MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} />
		</div>
	);
}
