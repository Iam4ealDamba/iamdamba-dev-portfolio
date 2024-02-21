// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { useRouter } from "next/navigation";
import { FC, useRef } from "react";

// ||||||||||||||||||||||||||||| LinkButton Component ||||||||||||||||||||||||||||||||||||

interface ILinkButtonProps {
  link: string;
  text: string;
  style?: string;
}

const LinkButton: FC<ILinkButtonProps> = ({ link, text, style }) => {
  // Hooks
  const router = useRouter();
  const ref = useRef<HTMLButtonElement>(null);

  // Functions
  const handleClick = () => {
    router.push(link);
  };

  // Return
  return (
    <button
      ref={ref}
      onClick={handleClick}
      className={`px-6 py-2 font-semibold rounded-lg text-tw_text_dark bg-tw_primary ${style}`}
    >
      {text}
    </button>
  );
};
export default LinkButton;
