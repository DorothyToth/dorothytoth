import React from "react";

export default function IconCaret(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlSpace="preserve"
			x={0}
			y={0}
			style={{
				enableBackground: "new 0 0 42 42",
			}}
			viewBox="0 0 42 42"
			{...props}
		>
			<path d="M-36.7 64.8h20.2v12.8h-20.2z" />
			<path d="m-41 61.6 14.4 10.5 14.5-10.5M9.9 64 21 72.1 32.1 64M-15.5 17.9l-11.1 11-11-11M42 21c0 11.6-9.4 21-21 21S0 32.6 0 21 9.4 0 21 0s21 9.4 21 21zm-9.4-3.81c.3-.3.3-.8 0-1.1-.3-.3-.8-.3-1.1 0L21 26.69l-10.5-10.5c-.3-.3-.8-.3-1.1 0-.3.3-.3.8 0 1.1L21 28.79l11.6-11.6z" />
		</svg>
	)
}