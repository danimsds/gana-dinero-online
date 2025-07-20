
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [email, setEmail] = useState("");

  const blogPosts = [
    {
      title: "5 formas reales de ganar dinero por internet en 2025",
      summary: "Desde marketing de afiliación hasta productos digitales, descubre qué funciona hoy para generar ingresos.",
      link: "#"
    },
    {
      title: "Las mejores plataformas para freelancers",
      summary: "Comparativa entre Fiverr, Upwork y Workana. ¿Cuál es mejor para ti?",
      link: "#"
    },
    {
      title: "Cómo crear tu primer infoproducto paso a paso",
      summary: "Guía práctica para lanzar tu ebook, curso o membresía online.",
      link: "#"
    }
  ];

  return (
    <main className="min-h-screen bg-yellow-50 text-gray-900 p-6">
      <section className="max-w-4xl mx-auto py-12">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Gana Dinero Online
        </motion.h1>
        <p className="text-lg text-center mb-8">
          Descubre estrategias reales para generar ingresos desde casa o viajando por el mundo.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">Afiliación</h2>
              <p>Promociona productos y gana comisiones con marketing de afiliación.</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">Freelance</h2>
              <p>Trabaja desde casa ofreciendo tus servicios en diseño, escritura, programación y más.</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">Infoproductos</h2>
              <p>Crea cursos, ebooks o membresías sobre lo que sabes hacer.</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Últimos artículos</h2>
          <div className="grid gap-6">
            {blogPosts.map((post, idx) => (
              <Card key={idx} className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="mb-2">{post.summary}</p>
                  <a href={post.link} className="text-green-600 hover:underline">
                    Leer más
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Recibe ideas nuevas cada semana</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full max-w-md"
            />
            <Button className="px-6 py-2 bg-green-600 hover:bg-green-500 rounded-xl text-white">
              Unirme gratis
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
