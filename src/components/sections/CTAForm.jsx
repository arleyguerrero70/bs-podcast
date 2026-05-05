import { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../../utils/constants';
import { useInView } from '../../hooks/useInView';
import { subscribeToMailchimp } from '../../utils/mailchimp';

export default function CTAForm() {
  const [ref, inView] = useInView();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!formData.email || !formData.name) {
      setError('Por favor completa al menos nombre y correo.');
      setIsLoading(false);
      return;
    }

    try {
      const result = await subscribeToMailchimp(formData.email, {
        firstName: formData.name.split(' ')[0],
        lastName: formData.name.split(' ').slice(1).join(' '),
        ROLE: formData.role,
        MESSAGE: formData.message,
      });

      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', role: '', message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setError(result.error || 'Algo salió mal. Intenta de nuevo.');
      }
    } catch (err) {
      setError('Error al enviar el formulario. Intenta más tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section ref={ref} id="contact" className="min-h-screen flex items-center justify-center bg-black text-white py-24 px-6">
      <div className="max-w-2xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {CONTENT.cta.headline}
            </h2>
            <p className="text-lg text-gray-300">
              {CONTENT.cta.description}
            </p>
          </motion.div>

          {/* Form */}
          {!isSuccess ? (
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name field */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold mb-2">
                  {CONTENT.cta.formFields.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition"
                  placeholder="Tu nombre"
                  required
                />
              </motion.div>

              {/* Email field */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold mb-2">
                  {CONTENT.cta.formFields.email}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition"
                  placeholder="tu@correo.com"
                  required
                />
              </motion.div>

              {/* Role field */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold mb-2">
                  {CONTENT.cta.formFields.role}
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition"
                  placeholder="Ej: Product Manager, Design Lead"
                />
              </motion.div>

              {/* Message field */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold mb-2">
                  {CONTENT.cta.formFields.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition resize-none"
                  placeholder="Comparte tu perspectiva..."
                  rows="4"
                />
              </motion.div>

              {/* Error message */}
              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-sm"
                >
                  {error}
                </motion.p>
              )}

              {/* Submit button */}
              <motion.button
                variants={itemVariants}
                type="submit"
                disabled={isLoading}
                className="w-full px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 disabled:opacity-50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? 'Enviando...' : CONTENT.cta.submitButton}
              </motion.button>

              {/* Privacy note */}
              <motion.p
                variants={itemVariants}
                className="text-xs text-gray-500 text-center"
              >
                Protegemos tu privacidad. Nunca compartiremos tu información.
              </motion.p>
            </motion.form>
          ) : (
            <motion.div
              variants={itemVariants}
              className="bg-gray-900 border border-green-500 rounded-lg p-8 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring' }}
                className="text-4xl mb-4"
              >
                ✓
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">¡Lo hemos recibido!</h3>
              <p className="text-gray-300">
                {CONTENT.cta.successMessage}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
