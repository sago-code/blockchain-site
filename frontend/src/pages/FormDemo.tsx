import type { FormEvent } from 'react';
import { useState } from 'react';

type ContactResponse = {
  message: string;
  [key: string]: unknown;
};

export default function FormDemo() {
  const [resp, setResp] = useState<ContactResponse | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value
    };

    const res = await fetch('/api/examples/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    setResp(await res.json());
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light p-0">
      <div className="w-100 h-100 d-flex justify-content-center align-items-center p-3">
        <div className="card shadow-lg p-4 p-md-5 w-100" style={{ maxWidth: 600 }}>
          <h2 className="mb-4 text-center display-5 fw-bold">Formulario de contacto (demo)</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Nombre</label>
              <input className="form-control" name="name" minLength={2} required placeholder="Tu nombre" />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Correo</label>
              <input className="form-control" name="email" type="email" required placeholder="tucorreo@dominio.com" />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Mensaje</label>
              <textarea className="form-control" name="message" minLength={10} rows={4} required />
            </div>
            <button className="btn btn-success w-100 py-2">Enviar</button>
          </form>
          {resp && (
            <div className="alert alert-info mt-4">{resp.message}</div>
          )}
        </div>
      </div>
    </div>
  );
}