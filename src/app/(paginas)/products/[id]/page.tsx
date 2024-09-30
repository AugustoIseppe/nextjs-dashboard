"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Products from "@/data/model/Products"; // Importe o seu modelo de Produtos
import Image from "next/image";

// Simulando um fetch de dados, você pode trocar para uma requisição de API real
async function fetchProductById(id: string): Promise<Products> {
  // Aqui você pode fazer uma requisição para sua API ou servidor para obter os detalhes do produto
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  return data;
}

export default function ProductDetailPage() {
  const { id } = useParams() as { id: string }; // Pega o ID da URL e garante que é uma string
  const [product, setProduct] = useState<Products | null>(null);

  useEffect(() => {
    if (id) {
      // Busca o produto ao carregar a página
      fetchProductById(id as string).then(setProduct);
    }
  }, [id]);

  if (!product) {
    return <p>Carregando...</p>; // Exibe enquanto o produto está sendo carregado
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <div className="flex gap-4">
        <div className="relative w-64 h-64">
          <Image src={product.thumbnail} alt={product.title} fill />
        </div>
        <div>
          <p className="text-lg">{product.description}</p>
          <p className="text-xl font-semibold text-green-600 mt-4">
            R$ {product.price.toFixed(2)}
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Categoria: {product.category}
          </p>
        </div>
      </div>
    </div>
  );
}
