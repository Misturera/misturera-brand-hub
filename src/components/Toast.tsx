export function Toast({ mensagem, visivel }: { mensagem: string; visivel: boolean }) {
  return (
    <div className={`toast${visivel ? " mostrar" : ""}`} role="status" aria-live="polite">
      {mensagem}
    </div>
  );
}
