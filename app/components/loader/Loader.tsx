import { FiLoader } from 'react-icons/fi';

type Props = {
  className: string;
}

export default function Loader({className}: Props) {
  return (
    <>
      <FiLoader className={className} />
    </>
  );
}
