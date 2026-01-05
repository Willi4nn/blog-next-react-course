import { Button } from '@/components/Button';
import InputCheckbox from '@/components/InputCheckbox';
import InputText from '@/components/InputText';

export const dynamic = 'force-dynamic';

export default async function AdminPostNew() {
  return (
    <form action="" className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <InputText labelText="Nome" placeholder="Digite seu nome" />
        <InputText
          disabled
          labelText="Sobrenome"
          placeholder="Digite seu sobrenome"
        />
        <InputCheckbox labelText="Aceito os termos" />
      </div>
      <div>
        <Button type="submit">Enviar</Button>
      </div>
    </form>
  );
}
