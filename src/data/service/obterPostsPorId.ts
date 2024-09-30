'use server'

export default async function obterPostsPorId(id: number) {
    console.log('Chamando a API com o ID:', id); // Para verificar se a função é chamada corretamente
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      
      console.log('Resposta recebida:', response); // Para verificar a resposta da API
  
      if (!response.ok) {
        console.log('Erro na resposta:', response.status, response.statusText); // Para logar se houver erro
        throw new Error(`Erro: ${response.status} - ${response.statusText}`);
      }
      
      const post = await response.json();
      console.log(`Post ${id}:`, post); // Para verificar o conteúdo do post
      return post;
    } catch (error) {
      console.error(`Erro ao obter post ${id}:`, error);
      return null;
    }
  }
  