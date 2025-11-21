import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatDatetime(rawDate: string) {
  const date = new Date(rawDate);

  return format(date, "d 'de' MMMM 'de' yyyy 'às' HH:mm", { locale: ptBR });
}

export function formatRelativeDate(rawDate: string) {
  const date = new Date(rawDate);

  return formatDistanceToNow(date, { addSuffix: true, locale: ptBR });
}
