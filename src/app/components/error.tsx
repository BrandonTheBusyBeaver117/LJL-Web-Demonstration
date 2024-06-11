export type ErrorProps = {
  disabledSupplier: () => boolean;
  message: string;
  children?: React.ReactNode;
};

const Error: React.FC<ErrorProps> = ({ disabledSupplier, message, children }) => {
  if (disabledSupplier()) return <></>;

  return (
    <div className="mb-4 rounded bg-red-500 p-2 text-white">
      {message}
      {children}
    </div>
  );
};

export default Error;
