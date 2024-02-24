import { useState } from "react";

export default function TextExpander({
  collapsNumber = 10,
  expand = "show Text",
  collaps = "collapes text",

  expanded = false,
  children,
}) {
  const [isOpen, setIsOpen] = useState(expanded);

  //   function handler() {
  //     return setIsOpen(!isOpen);
  //   }
  return (
    <div>
      <div>
        <span>
          {isOpen
            ? children
            : children.split(" ").slice(0, collapsNumber).join(" ")}
        </span>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? collaps : expand}
        </button>
      </div>
    </div>
  );
}
{
  /* <div>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
          turpis vel elit interdum, a mollis lectus sagittis. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Vestibulum viverra ultrices elit eget volutpat.
          Phasellus consequat libero placerat quam sollicitudin, sit amet
          placerat odio placerat. Fusce vehicula condimentum ante, non pharetra
          nisi dapibus id. Donec a accumsan tellus. Ut blandit efficitur tellus
          eget blandit
        </span>
        <button>show more</button>
      </div>
      <div>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
          turpis vel elit interdum, a mollis lectus sagittis. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Vestibulum viverra ultrices elit eget volutpat.
          Phasellus consequat libero placerat quam sollicitudin, sit amet
          placerat odio placerat. Fusce vehicula condimentum ante, non pharetra
          nisi dapibus id. Donec a accumsan tellus. Ut blandit efficitur tellus
          eget blandit.Vestibulum viverra ultrices elit eget volutpat. Phasellus
          consequat libero placerat quam sollicitudin, sit amet placerat odio
          placerat. Fusce vehicula condimentum ante, non pharetra nisi dapibus
          id. Donec a accumsan tellus. Ut blandit efficitur tellus eget blandit
          id. Donec a accumsan tellus. Ut blandit efficitur tellus eget blandit
          id. Donec a accumsan tellus. Ut blandit efficitur tellus eget blandit
          id. Donec a accumsan tellus. Ut blandit efficitur tellus eget blandit
          id. Donec a accumsan tellus. Ut blandit efficitur tellus eget blandit
        </span>
        <button>show more</button>
      </div> */
}
