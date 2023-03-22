const allthedata = [
  { id: 1, name: 'hah', price: 20 },
  { id: 1, name: 'hah', price: 20 },
  { id: 1, name: 'hah', price: 20 },
];

const Oop = () => {
  return (
    <div>
      {allthedata.map((item, idx) => {
        return <p key={idx}>{item.name}</p>;
      })}
    </div>
  );
};

export default Oop;
