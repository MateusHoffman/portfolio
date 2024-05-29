import { delay } from "@/app/util/util";
import Modal from "@/components/modal/Modal";
import React, { useEffect, useState } from "react";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function ModalSendMessage(props: IProps) {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Enviar os dados para o meu email

    try {
      setLoading(true)
      const response = await fetch("/api/contact/sendCustomerEmailToMe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, subject, message }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess("Mensagem enviada com sucesso!");
      } else {
        setError("Falha ao enviar mensagem. Tente novamente.");
      }
    } catch (error) {
      setError("Ocorreu um erro. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      if (success === "Mensagem enviada com sucesso!") {
        await delay(2000)
        props.setIsOpen(false)
        setLoading(false);
        setError("");
        setSuccess("");
      }
    })()
  }, [success, props])

  return (
    <Modal
      isOpen={props.isOpen}
      setIsOpen={props.setIsOpen}
      title="Enviar mensagem"
    >
      <div className="flex flex-col gap-4">
        <form onSubmit={handleSendMessage} action="#" className="space-y-3">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-[#000000e6] font-normal text-base"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-[#00000080] text-gray-900 text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="email@gmail.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-[#000000e6] font-normal text-base"
            >
              Assunto
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-[#00000080] shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Descreva o assunto"
              required
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-[#000000e6] font-normal text-base"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              rows={6}
              required
              onChange={(e) => setMessage(e.target.value)}
              className="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-[#00000080] focus:ring-primary-500 focus:border-primary-500"
              placeholder="Deixe sua mensagem..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar mensagem"}
          </button>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
        </form>
      </div>
    </Modal>
  );
}
