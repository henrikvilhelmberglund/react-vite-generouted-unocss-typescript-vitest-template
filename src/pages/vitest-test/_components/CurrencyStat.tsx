import { formatCurrency } from "../formatCurrency";

interface CurrencyStatProps {
  value: number;
}

export default function CurrencyStat({ value }: CurrencyStatProps) {
  return (
    <>
      <div>
        <p className="text-3xl p-24">
          {/*  */}
          {/* {value} */}

          {/* this should work (only one at a time)*/}
          {formatCurrency(value)}
        </p>
      </div>
    </>
  );
}
