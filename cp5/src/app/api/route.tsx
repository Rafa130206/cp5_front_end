import { TipoImagem } from "@/types";
import { promises as fs} from "fs"
import { NextResponse } from "next/server";

export async function GET(){
    
    const file = await fs.readFile(process.cwd() + '/src/data/base.json','utf-8');
    const imagens = JSON.parse(file);

    return NextResponse.json(imagens);
}

export async function POST(request:Request, response:Response){
    const file = await fs.readFile(process.cwd() + '/src/data/base.json','utf-8');
    const imagens:TipoImagem[] = JSON.parse(file);

    const {url} = await request.json();

    //Criar um ID no novo OBJETO que será inserido no base.json.
    const imagem = {url} as TipoImagem;
    imagem.id = ( imagens[imagens.length-1].id + 1);

    //Inserir o novo produto que já possui inclusive ID na lista de produtos:
    imagens.push(imagem);

    //Processo de manipulação do arquuivo com promises e process.cwd para colocar a lista no arquivo e atualizar ele.

    //1 - Convertendo a lista em STRING
    const fileUpdate = JSON.stringify(imagens);
    //2 - Escrevendo no arquivo através do caminho especificado.
    await fs.writeFile(process.cwd() + '/src/data/base.json', fileUpdate);

    return NextResponse.json(imagem);
}