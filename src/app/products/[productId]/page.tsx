import React from "react";

export default function productdetails({
  params,
}: {
  params: { productId: string };
}) {
  return <div>productdetails {params.productId}</div>;
}
