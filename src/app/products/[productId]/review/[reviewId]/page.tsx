import { notFound } from "next/navigation";
import React from "react";

export default function reviewPage({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      review {params.reviewId} of product {params.productId}
    </div>
  );
}
