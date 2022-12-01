function Table({ data,config}) {
  const renderedRows = data.map((fruit) => {
    return(
      <tr className="border-b" key={fruit.name}>
        <td className="p-3">{config[0].render(fruit)}</td>
        <td className="p-3">
        {config[1].render(fruit)}
        </td>
        <td className="p-3">{config[2].render(fruit)}</td>
      </tr>
    );
    // return (
    //   <tr className="border-b" key={fruit.name}>
    //     <td className="p-3">{fruit.name}</td>
    //     <td className="p-3">
    //       <div className={`p-3 m-2 ${fruit.color}`}></div>
    //     </td>
    //     <td className="p-3">{fruit.score}</td>
    //   </tr>
    // );
  });

  const renderedHeaderRows = config.map((heading)=>{
    return(
      <th key={heading.lable}>heading.lable</th>
    );
  })

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          
          {renderedHeaderRows}
        </tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
