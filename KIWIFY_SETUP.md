# Configuração Kiwify – Pagamento e Webhook

O app já está preparado para Kiwify. Você só precisa configurar **dois itens** no painel da Kiwify e **um** no código.

---

## 1. Link do produto (checkout) – obrigatório

- Crie o produto **“Análise Astrológica Completa”** (ou o nome que preferir) na Kiwify com valor **R$ 28,00** (pagamento único).
- Copie o **link de checkout** do produto (ex.: `https://pay.kiwify.com.br/XXXXX`).
- No projeto, abra **`src/lib/stripe.ts`** e substitua o placeholder:

```ts
checkoutUrl: 'https://pay.kiwify.com.br/SEU_LINK_AQUI'
```

por algo como:

```ts
checkoutUrl: 'https://pay.kiwify.com.br/SEU_LINK_REAL_DO_PRODUTO'
```

(Ou use variável de ambiente: crie `KIWIFY_CHECKOUT_URL` e leia no código.)

Ao clicar em “Processar pagamento”, o usuário será redirecionado para esse link. A URL já leva **nome**, **email** e **URLs de retorno** (sucesso e cancelamento) como parâmetros.

---

## 2. Webhook – obrigatório para confirmar pagamento

O webhook avisa o app quando a compra foi aprovada, para liberar o relatório.

### No painel Kiwify

1. Acesse **Apps** → **Webhooks**.
2. Clique em **Criar Webhook**.
3. **URL do webhook:**  
   `https://SEU-DOMINIO.com/api/kiwify-webhook`  
   (ex.: `https://astroglix.vercel.app/api/kiwify-webhook`).
4. **Produto:** selecione o produto da Análise Astrológica (R$ 28).
5. **Evento:** **Compra aprovada** (ou equivalente).
6. Salve e, se quiser, use **Testar Webhook** para validar.

### O que o app espera no body (JSON)

O handler em **`/api/kiwify-webhook`** já trata estes campos (com fallbacks):

| Campo          | Exemplos de nome no JSON     | Uso                          |
|----------------|------------------------------|------------------------------|
| Status         | `status`, `payment_status`, `order_status` | Valores: `approved`, `paid`, `completed`, `paid_out` |
| Email          | `customer_email`, `email`, `buyer.email`   | Para encontrar o pagamento salvo |
| Nome           | `customer_name`, `name`, `buyer.name`      | Idem                         |
| ID do pedido   | `order_id`, `id`, `transaction_id`         | Registro da compra           |

Se a Kiwify enviar outros nomes de campos, podemos ajustar o arquivo **`src/app/api/kiwify-webhook/route.ts`** quando você tiver um exemplo de payload (pode pegar nos logs do webhook na Kiwify).

---

## 3. API Kiwify – opcional

- **Não é necessário** para o fluxo atual: o checkout é feito só com o **link do produto** + parâmetros na URL.
- A **API da Kiwify** (OAuth2 / API Key) seria usada se no futuro você quiser criar pedidos ou consultar transações por API. Para só redirecionar e receber o webhook, link + webhook são suficientes.

---

## Resumo

| O que você precisa | Onde |
|--------------------|------|
| **Link do produto** (checkout R$ 28) | Kiwify → produto → copiar link → `src/lib/stripe.ts` (`checkoutUrl`) |
| **URL do webhook** | Kiwify → Apps → Webhooks → URL = `https://SEU-DOMINIO/api/kiwify-webhook` |
| **Evento** | Compra aprovada (no mesmo webhook) |

Depois disso, o fluxo fica: usuário preenche o formulário → clica em pagar → vai para a Kiwify → paga → Kiwify chama o webhook → app marca pagamento como aprovado → usuário é redirecionado para a página de sucesso e vê o relatório.
