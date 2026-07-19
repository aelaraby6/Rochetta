export default function ProductGallery({ optimizedImage, productName }) {
  return (
    <div className="w-full md:w-1/2 flex justify-center items-center bg-white rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
      <img
        src={optimizedImage}
        alt={productName}
        className="max-h-[320px] w-auto object-contain"
        loading="eager"
        fetchpriority="high"
        decoding="async"
      />
    </div>
  );
}
