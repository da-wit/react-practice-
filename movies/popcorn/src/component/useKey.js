import { useEffect } from "react";

export default function useKey(key, action) {
  useEffect(
    function () {
      function callBack(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action(true);
        }
      }
      document.addEventListener("keydown", callBack);

      return function () {
        document.removeEventListener("keydown", callBack);
      };
    },
    [action, key]
  );
  //   useEffect(
  //     function () {
  //       function call(e) {
  //         if (e.code.toLowerCase() === key.toLowerCase()) {
  //           action(true);
  //         }
  //         document.addEventListener("keydown", call);

  //         return function () {
  //           document.removeEventListener("keydown", call);
  //         };
  //       }
  //     },
  //     [key, action]
  //   );
}
