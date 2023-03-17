import * as React from "react";

interface IInvoiceListProps {
  invoiceData: {
    customerName: string;
    invoices: {id: number; name: string, total: string}[]
  }
  
  logo?: string;
}

const InvoiceList = (props: IInvoiceListProps) => {
  const {customerName, invoices} = props.invoiceData;
  
  return <div>
    <h1>{props.invoiceData.customerName}</h1>
  </div>
}

const App = () => {
  const data = {
    customerName: "Google",
    invoices: [
      {id: 123, name: "Dev work", total: "20.00"},
      {id: 456, name: "More dev work", total: "50.00"},
      {id: 456, name: "Something different", total: "100.00"},
    ]
  }

  return (
    <div>
      <InvoiceList invoiceData={data}/>
    </div>
  );
};

export default App;
