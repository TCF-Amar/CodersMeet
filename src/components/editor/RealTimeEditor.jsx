import { useEffect, useState } from "react";
import { database, ref } from "../../configs/firebase"; // Ensure ref is imported
import { onValue, set } from "firebase/database";
import CodeEditor from "./CodeEditor";

function RealTimeEditor({ docId }) {
  const [code, setCode] = useState("");

  useEffect(() => {
    const docRef = ref(database, `documents/${docId}`);
    const unsubscribe = onValue(docRef, (snapshot) => {
      if (snapshot.exists()) {
        setCode(snapshot.val().content);
      }
    });

    return () => unsubscribe();
  }, [docId]);

  const handleChange = (newCode) => {
    setCode(newCode);
    set(ref(database, `documents/${docId}`), { content: newCode });
  };

  return <CodeEditor code={code} onChange={handleChange} />;
}

export default RealTimeEditor;
