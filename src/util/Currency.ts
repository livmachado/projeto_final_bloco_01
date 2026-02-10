// Formata tipo number para valor em Real

export function formatCurrency(valor: number): string {
	return new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL'
	}).format(valor)
}