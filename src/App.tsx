import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  Egg, 
  Wallet, 
  AlertTriangle,
  ChevronRight,
  ShieldCheck,
  Package,
  Check
} from 'lucide-react';

// Countdown Timer Component
const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(599); // 9:59 in seconds

  useEffect(() => {
    if (seconds <= 0) return;
    const interval = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')} minutos e ${secs.toString().padStart(2, '0')} segundos`;
  };

  return (
    <div className="flex items-center justify-center gap-2 text-red-600 font-bold text-lg md:text-xl font-display uppercase tracking-wider">
      <Clock className="w-5 h-5 animate-pulse" />
      <span>{formatTime(seconds)}</span>
    </div>
  );
};

// Progress Bar Component
const ProgressBar = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-6 px-4">
      <div className="flex justify-between items-center mb-2 text-sm font-semibold uppercase tracking-widest text-stone-500">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
          Sua compra
        </span>
        <span className="text-emerald-700">97%</span>
      </div>
      <div className="h-3 w-full bg-stone-200 rounded-full overflow-hidden shadow-inner border border-stone-300/50">
        <motion.div 
          initial={{ width: "0%" }}
          animate={{ width: "97%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full bg-linear-to-r from-emerald-600 to-emerald-400 relative"
        >
          <div className="absolute inset-0 bg-[rgba(255,255,255,0.2)] animate-shimmer"></div>
        </motion.div>
      </div>
    </div>
  );
};

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      {/* Header Alert */}
      <header className="bg-red-50 border-b border-red-100 py-3 px-4 text-center">
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-700 font-bold text-sm md:text-base flex items-center justify-center gap-2"
        >
          <AlertTriangle className="w-4 h-4" />
          🚨 ESPERE! SUA COMPRA AINDA NÃO ESTÁ COMPLETA...
        </motion.p>
      </header>

      <main className="max-w-3xl mx-auto px-4 pb-20 pt-8">
        {/* Timer Section */}
        <div className="text-center space-y-2 mb-6">
          <CountdownTimer />
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-stone-600 font-medium text-lg px-4"
          >
            Sua criação pode dar MUITO mais lucro com esse próximo material.
          </motion.h2>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            src="https://i.imgur.com/dkPhpxC.jpeg"
            alt="Destaque Produção"
            className="mx-auto w-full max-w-[280px] md:max-w-xs h-auto block"
          />
        </div>

        {/* Progress Bar */}
        <ProgressBar />

        {/* Main Product Section */}
        <section className="mt-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-bold uppercase tracking-widest mb-2 border border-amber-200">
              <Egg className="w-3 h-3" />
              Oferta Exclusiva de Upgrade
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-agro-green-dark leading-tight tracking-tight px-2">
              🥚 PRODUÇÃO INTENSIVA DE <span className="text-emerald-600">OVOS CAIPIRAS</span>
            </h1>
            <p className="text-stone-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-4">
              O passo a passo simples para aumentar a produção, reduzir desperdícios e fazer sua criação produzir mais ovos e mais dinheiro.
            </p>
          </motion.div>

        </section>

        {/* Benefits Section */}
        <section className="mt-16 bg-white rounded-3xl p-8 md:p-12 border border-stone-200 shadow-sm">
          <h3 className="text-2xl font-display font-bold text-stone-800 mb-8 flex items-center gap-3">
            <Package className="text-emerald-600 w-7 h-7" />
            📦 Nesse material você vai aprender:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Como aumentar a postura das galinhas",
              "O que faz muitas aves produzirem pouco",
              "Manejo simples para produzir mais ovos",
              "Como evitar desperdício e prejuízo",
              "Técnicas usadas por pequenos produtores lucrativos",
              "Como transformar poucas galinhas em mais renda"
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-100 hover:border-emerald-200 hover:bg-white transition-all group"
              >
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-stone-700 font-semibold leading-snug">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Desire Section */}
        <section className="mt-12 bg-emerald-700 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl"></div>
          
          <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
            <TrendingUp className="w-7 h-7" />
            💥 Ideal pra quem quer:
          </h3>
          
          <div className="space-y-4 relative z-10">
            {[
              "Produzir mais ovos",
              "Lucrar mais com a criação",
              "Ter retorno mais rápido",
              "Evitar erros que diminuem a produção"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 text-lg font-medium">
                <CheckCircle2 className="w-6 h-6 text-emerald-300 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing & CTA Section */}
        <section className="mt-16 text-center space-y-8">
          <div className="space-y-2">
            <p className="text-stone-400 text-xl font-medium line-through decoration-red-500/50 decoration-2 italic">De R$97,00 por apenas</p>
            <div className="relative inline-block">
              <motion.p 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-7xl md:text-9xl font-display font-black text-emerald-950"
              >
                <span className="text-3xl font-bold align-top mt-4 inline-block mr-1">R$</span>
                37,00
              </motion.p>
              <div className="absolute -top-4 -right-12 bg-red-600 text-white text-[10px] md:text-sm font-black px-3 py-1 rounded-sm uppercase tracking-tighter rotate-12 shadow-lg">
                Único Pagamento
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 text-emerald-600 font-bold mt-4 md:text-lg">
              <ShieldCheck className="w-6 h-6" />
              <span>Garantia de 7 dias incondicional</span>
            </div>
          </div>

          <div className="space-y-4 pt-4 px-2">
            <motion.a 
              href="https://checkout.bigmaney.com/checkout/cmp3me982064j1rqlhx2ozqqg?offer=85YG2E1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 md:py-8 rounded-2xl text-xl md:text-3xl font-black shadow-xl shadow-emerald-600/30 transition-all flex flex-col items-center justify-center gap-1 group border-b-8 border-emerald-900"
            >
              <div className="flex items-center gap-2 text-center px-4">
                <CheckCircle2 className="w-8 h-8 flex-shrink-0" />
                SIM, QUERO PRODUZIR MAIS OVOS E LUCRAR MAIS
              </div>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-emerald-100 group-hover:text-white transition-colors">Acesso imediato após o pagamento</span>
            </motion.a>

            <button className="text-stone-400 font-bold hover:text-stone-600 transition-colors py-4 flex items-center justify-center mx-auto gap-1 text-sm md:text-base underline">
              Não quero aumentar minha produção agora
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Footer Info */}
        <footer className="mt-20 border-t border-stone-200 pt-12 text-center space-y-8">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-10 max-w-2xl mx-auto shadow-inner">
            <p className="text-stone-700 font-bold text-lg md:text-xl leading-relaxed">
              ⚠️ <span className="text-amber-800 underline decoration-amber-300 decoration-4">Essa é a única chance</span> de adicionar esse material com desconto especial. Essa oferta não será mostrada novamente.
            </p>
          </div>

          <div className="space-y-4 py-8">
            <h4 className="text-2xl md:text-4xl font-display font-bold text-stone-800 uppercase tracking-tight">OBRIGADO POR COMPRAR CONOSCO!</h4>
            <p className="text-stone-600 text-lg md:text-xl max-w-lg mx-auto">
              Você receberá todos os acessos diretamente no seu WhatsApp e e-mail.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 opacity-40 grayscale">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-6 h-6" />
              <span className="font-black text-sm tracking-widest">PAGAMENTO 100% SEGURO</span>
            </div>
            <div className="flex items-center gap-2">
              <Wallet className="w-6 h-6" />
              <span className="font-black text-sm tracking-widest">DADOS PROTEGIDOS</span>
            </div>
          </div>
          
          <p className="text-xs text-stone-400 pt-12 pb-12">
            © {new Date().getFullYear()} Produção Intensiva - Todos os direitos reservados.
          </p>
        </footer>
      </main>
    </div>
  );
}
