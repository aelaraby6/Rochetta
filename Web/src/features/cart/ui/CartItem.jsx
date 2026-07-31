import { Link } from "react-router-dom";
import { Plus, Minus, Trash2, Loader2 } from "lucide-react";

export default function CartItem({
  item,
  activeAction,
  onIncrement,
  onDecrement,
  onRemove,
}) {
  const product = item.product || item;
  const id = product._id;
  const qty = item.quantity ?? item.NOI ?? 1;
  const stripsPerBox = Number(product.stripsPerBox || product.strip_count || 0);
  const isStripItem = item.unit === "strip" && stripsPerBox > 0;
  const unitPrice = Number(product.price.toFixed(2) ?? 0);
  const subtotal = (unitPrice * qty).toFixed(2);
  const stockAvailable = product.pieces ?? product.stock ?? 0;

  let qtyDisplay = "";
  if (isStripItem) {
    const boxes = Math.floor(qty / stripsPerBox);
    const strips = Math.round(qty % stripsPerBox);
    if (boxes > 0 && strips > 0) qtyDisplay = `${boxes} box + ${strips} strip`;
    else if (boxes > 0) qtyDisplay = `${boxes} box${boxes > 1 ? "es" : ""}`;
    else qtyDisplay = `${strips} strip${strips > 1 ? "s" : ""}`;
  } else {
    const num = Math.round(qty * 100) / 100;
    qtyDisplay = Number.isInteger(num)
      ? `${num} box${num > 1 ? "es" : ""}`
      : `${num.toFixed(2)} box`;
  }

  const isIncLoading = activeAction.id === id && activeAction.type === "inc";
  const isDecLoading = activeAction.id === id && activeAction.type === "dec";
  const isRemLoading = activeAction.id === id && activeAction.type === "rem";
  const actionInProgress = isIncLoading || isDecLoading || isRemLoading;

  return (
    <div
      className={`flex flex-col sm:flex-row items-center gap-4 p-4 border-b border-gray-100 dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors ${
        actionInProgress ? "opacity-70 pointer-events-none" : ""
      }`}
    >
      <Link
        to={`/product/${id}`}
        className="w-24 h-24 flex-shrink-0 bg-gray-50 dark:bg-gray-700 rounded-xl p-2 border border-gray-100 dark:border-gray-600"
        aria-label={`View details of ${product.name}`}
      >
        <img
          src={product.image || "/placeholder.png"}
          alt={product.name}
          className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal"
        />
      </Link>

      <div className="flex-grow text-center sm:text-left">
        <Link
          to={`/product/${id}`}
          className="text-lg font-bold text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"
        >
          {product.name}
        </Link>
        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">
          {product.desc || product.description}
        </div>

        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-3">
          <div className="flex items-center gap-2">
            <button
              aria-label={`Increase quantity of ${product.name}`}
              onClick={() => onIncrement(item, isStripItem, stripsPerBox)}
              disabled={stockAvailable <= qty || actionInProgress}
              className="w-8 h-8 flex justify-center items-center rounded-lg border border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isIncLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
              ) : (
                <Plus className="w-4 h-4" aria-hidden="true" />
              )}
            </button>
            <div className="min-w-[4rem] text-center font-bold text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 py-1 px-2 rounded-lg text-sm">
              {qtyDisplay}
            </div>
            <button
              aria-label={`Decrease quantity of ${product.name}`}
              onClick={() => onDecrement(item, isStripItem, stripsPerBox)}
              disabled={actionInProgress}
              className="w-8 h-8 flex justify-center items-center rounded-lg border border-yellow-600 text-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-900/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isDecLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
              ) : (
                <Minus className="w-4 h-4" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="text-gray-900 dark:text-gray-300 font-semibold">
            ${unitPrice.toFixed(2)}{" "}
            <span className="text-sm text-gray-500 font-normal">each</span>
          </div>
        </div>
      </div>

      <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto mt-4 sm:mt-0 gap-4">
        <div className="text-right">
          <div className="text-xl font-bold text-gray-900 dark:text-white">
            ${subtotal}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {stockAvailable.toFixed(2)} in stock
          </div>
        </div>
        <button
          aria-label={`Remove ${product.name} from cart`}
          onClick={() => onRemove(id)}
          disabled={actionInProgress}
          className="text-red-500 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isRemLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
          ) : (
            <Trash2 className="w-5 h-5" aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
}
