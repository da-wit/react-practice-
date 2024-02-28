import { useEffect } from "react";

export default function useRange(key, action) {
  useEffect(
    function () {
      function callBack(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action(0);
        }
      }
      document.addEventListener("keydown", callBack);

      return function () {
        document.removeEventListener("keydown", callBack);
      };
    },
    [key, action]
  );
}
