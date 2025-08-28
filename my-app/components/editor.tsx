"use client"

import dynamic from "next/dynamic"
import "react-quill/dist/quill.snow.css";

interface EditorProps {
    onchange: (value: string) => void;
    value: string;
};

export const Editor = ({
    onchange,
    value,
}: EditorProps) => {
const ReactQuill = useMemo(() => dynamic(() => import("react-quill"), { ssr: false }), []);

return (
    <div className="bg-white">
        <ReactQuill
        theme="snow"
        value={value}
        onChange={onchange}
        />
    </div>
);
;}

