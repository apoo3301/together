import Navbar from '@/components/extern/navbar'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const SupportPage = () => {
    const faqItems = [
        {
            question: "QUAND VAIS-JE RECEVOIR MA COMMANDE ?",
            answer: "Les commandes sont généralement traitées et expédiées sous 1-2 jours ouvrables. Le délai de livraison dépend de votre localisation, généralement 2-5 jours ouvrables pour la France métropolitaine."
        },
        {
            question: "COMMENT PUIS-JE RETOURNER UN ARTICLE ?",
            answer: "Vous pouvez retourner votre article dans les 14 jours suivant la réception. Rendez-vous dans la section 'Retours' de votre compte pour générer une étiquette de retour."
        },
        {
            question: "COMMENT PUIS-JE SUIVRE MA COMMANDE ?",
            answer: "Un email de confirmation avec le numéro de suivi vous sera envoyé dès que votre commande sera expédiée. Vous pouvez également suivre votre commande depuis votre compte client."
        },
        {
            question: "QUELS SONT LES MODES DE PAIEMENT ACCEPTÉS ?",
            answer: "Nous acceptons les cartes de crédit (Visa, Mastercard), PayPal, et Apple Pay."
        }
    ]
    return (
        <>
            <div className="min-h-screen flex flex-col bg-white">
                <Navbar />
                <main className="flex-grow pt-20">
                    <div className="container mx-auto px-4 py-12">
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <div>
                                <h2 className="text-2xl font-bold mb-6">NOUS CONTACTER</h2>
                                <form className="space-y-4">
                                    <div>
                                        <Input placeholder="NOM" className="border-black" />
                                    </div>
                                    <div>
                                        <Input type="email" placeholder="EMAIL" className="border-black" />
                                    </div>
                                    <div>
                                        <Input placeholder="NUMÉRO DE COMMANDE" className="border-black" />
                                    </div>
                                    <div>
                                        <Select>
                                            <SelectTrigger className="border-black">
                                                <SelectValue placeholder="SUJET" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="order">COMMANDE</SelectItem>
                                                <SelectItem value="return">RETOUR</SelectItem>
                                                <SelectItem value="product">PRODUIT</SelectItem>
                                                <SelectItem value="other">AUTRE</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <Textarea placeholder="MESSAGE" className="min-h-[150px] border-black" />
                                    </div>
                                    <Button className="w-full bg-black hover:bg-black/90">ENVOYER</Button>
                                </form>

                                <div className="mt-8">
                                    <h3 className="font-medium mb-2">HORAIRES DU MAGASIN :</h3>
                                    <p className="text-sm text-gray-600">Lundi - Vendredi : 9h00 - 18h00</p>
                                    <p className="text-sm text-gray-600">Hors week-ends et jours fériés</p>
                                </div>
                            </div>

                            {/* FAQ Section */}
                            <div>
                                <h2 className="text-2xl font-bold mb-6">QUESTIONS FRÉQUENTES</h2>
                                <Accordion type="single" collapsible className="w-full">
                                    {faqItems.map((item, index) => (
                                        <AccordionItem key={index} value={`item-${index}`}>
                                            <AccordionTrigger className="text-left">
                                                {item.question}
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                {item.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default SupportPage