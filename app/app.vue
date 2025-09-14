<template>
  <div class="min-h-screen bg-gray-50">
    <NuxtRouteAnnouncer />
    
    <!-- Header -->
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <div>
              <h1 class="text-xl font-bold text-gray-900">Naprawa Laptopów</h1>
              <p class="text-sm text-gray-600">Serwis komputerowy Yury</p>
            </div>
          </div>
          <div class="hidden md:flex items-center space-x-6">
            <a href="#uslugi" class="text-gray-700 hover:text-blue-600">Usługi</a>
            <a href="#skupka" class="text-gray-700 hover:text-blue-600">Skup laptopów</a>
            <a href="#kontakt" class="text-gray-700 hover:text-blue-600">Kontakt</a>
            <a href="tel:+48123456789" class="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700">
              Zadzwoń teraz
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
      <!-- Decorative neon background effects -->
      <div aria-hidden="true" class="absolute inset-0 pointer-events-none select-none">
        <div class="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-fuchsia-500 opacity-30 blur-3xl mix-blend-screen"></div>
        <div class="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-emerald-400 opacity-30 blur-3xl mix-blend-screen"></div>
      </div>
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-6xl font-bold mb-6">
          Masz zepsuty laptop?
        </h2>
        <p class="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Profesjonalnie naprawiam laptopy i komputery stacjonarne. Specjalizuję się w trudnych przypadkach - zalania, wymiana płyt głównych, reballing BGA.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#kontakt" class="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors">
            Bezpłatna wycena
          </a>
          <a href="tel:+48123456789" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
            📞 Zadzwoń od razu
          </a>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="uslugi" class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Specjalizuję się w trudnych naprawach
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Od kilku lat zajmuję się naprawami laptopów i komputerów. Pracuję uczciwie i bez obiecywania cudów.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Service 1 -->
          <div class="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Naprawa po zalaniu</h3>
            <p class="text-gray-600 mb-4">
              Profesjonalne czyszczenie i naprawa laptopów po kontakcie z wodą, kawą lub innymi płynami.
            </p>
            <p class="text-blue-600 font-semibold">od 150 zł</p>
          </div>

          <!-- Service 2 removed per client request -->

          <!-- Service 3 -->
          <div class="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Szukanie zwarć</h3>
            <p class="text-gray-600 mb-4">
              Profesjonalna diagnostyka i naprawa zwarć w układach elektronicznych laptopów.
            </p>
            <p class="text-blue-600 font-semibold">od 100 zł</p>
          </div>

          <!-- Service 4 -->
          <div class="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"/>
                <path fill-rule="evenodd" d="M3 8a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Reanimacja "martwych" płyt głównych</h3>
            <p class="text-gray-600 mb-4">
              Naprawa płyt głównych, które nie wykazują oznak życia - diagnostyka i przywracanie funkcjonalności.
            </p>
            <p class="text-blue-600 font-semibold">od 200 zł</p>
          </div>

          <!-- Service 5 -->
          <div class="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Reballing i lutowanie</h3>
            <p class="text-gray-600 mb-4">
              Zaawansowane techniki lutownicze - reballing chipów BGA i precyzyjne lutowanie elementów SMD.
            </p>
            <p class="text-blue-600 font-semibold">od 250 zł</p>
          </div>

          <!-- Service 6 -->
          <div class="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Komputery stacjonarne</h3>
            <p class="text-gray-600 mb-4">
              Naprawa komputerów stacjonarnych - diagnostyka, wymiana podzespołów, optymalizacja wydajności.
            </p>
            <p class="text-blue-600 font-semibold">od 80 zł</p>
          </div>
        </div>

        <!-- Important Notice -->
        <div class="mt-16 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div class="flex items-start space-x-3">
            <svg class="w-6 h-6 text-blue-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
            </svg>
            <div>
              <h3 class="text-lg font-semibold text-blue-800 mb-2">Ważne informacje</h3>
              <ul class="space-y-2 text-blue-700">
                <li>• <strong>Tylko laptopy i komputery</strong> - nie naprawiam telefonów ani tabletów</li>
                <li>• <strong>Bez wizyt domowych</strong> - sprzęt należy przywieźć do serwisu</li>
                <li>• <strong>Uczciwa wycena</strong> - nie obiecuję naprawy za grosze</li>
                <li>• <strong>Profesjonalne podejście</strong> - dokładna diagnostyka przed każdą naprawą</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Laptop Buying Section -->
    <section id="skupka" class="py-20 bg-gray-100">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kupuję uszkodzone laptopy na części
          </h2>
          <p class="text-xl text-gray-600">
            Jeśli Twój laptop się nie opłaca naprawiać, mogę go wykupić na części
          </p>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-8">
          <form class="space-y-6">
            <div>
              <label for="description" class="block text-sm font-semibold text-gray-700 mb-2">
                Opis laptopa i usterki *
              </label>
              <textarea
                id="description"
                rows="4"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                placeholder="Opisz model laptopa, uszkodzenia, stan wizualny, co jeszcze działa..."
                required
              ></textarea>
            </div>

            <div>
              <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                Adres email *
              </label>
              <input
                type="email"
                id="email"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="twoj@email.pl"
                required
              />
            </div>

            <div>
              <label for="price" class="block text-sm font-semibold text-gray-700 mb-2">
                Oczekiwana cena (PLN) *
              </label>
              <input
                type="number"
                id="price"
                min="0"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="np. 200"
                required
              />
              <p class="text-sm text-gray-500 mt-2">
                Podaj realną cenę, która pomoże mi ocenić, czy warto się kontaktować
              </p>
            </div>

            <button
              type="submit"
              class="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Wyślij zapytanie o skup
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="kontakt" class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kontakt i lokalizacja
          </h2>
          <p class="text-xl text-gray-600">
            Pracuję dokładnie, uczciwie i bez obiecywania cudów
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-gray-50 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-gray-900 mb-6">Napisz do mnie</h3>
            <form class="space-y-4">
              <div>
                <label for="contact-name" class="block text-sm font-medium text-gray-700 mb-2">Imię</label>
                <input
                  type="text"
                  id="contact-name"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Twoje imię"
                />
              </div>
              <div>
                <label for="contact-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="twoj@email.pl"
                  required
                />
              </div>
              <div>
                <label for="contact-message" class="block text-sm font-medium text-gray-700 mb-2">Wiadomość</label>
                <textarea
                  id="contact-message"
                  rows="4"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  placeholder="Opisz problem z laptopem..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Wyślij wiadomość
              </button>
            </form>
          </div>

          <!-- Contact Info -->
          <div>
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900">Telefon</h3>
                  <p class="text-gray-600">+48 123 456 789</p>
                  <p class="text-sm text-gray-500">Pon-Pt: 9:00-17:00</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900">Email</h3>
                  <p class="text-gray-600">yury@laptops.pl</p>
                  <p class="text-sm text-gray-500">Odpowiadam w ciągu 24h</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900">Lokalizacja</h3>
                  <p class="text-gray-600">Warszawa, Polska</p>
                  <p class="text-sm text-gray-500">Tylko odbiór w serwisie</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900">Telegram / WhatsApp</h3>
                  <p class="text-gray-600">+48 123 456 789</p>
                  <p class="text-sm text-gray-500">Szybki kontakt</p>
                </div>
              </div>
            </div>

            <div class="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p class="text-green-800 font-medium">
                📍 Mówię po białorusku, rosyjsku, trochę po polsku i angielsku - porozumiemy się! 🙂
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-12">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8">
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <span class="font-bold">Serwis Yury</span>
            </div>
            <p class="text-gray-300 mb-4">
              Profesjonalny serwis laptopów i komputerów w Warszawie. Specjalizacja w trudnych naprawach.
            </p>
          </div>
          
          <div>
            <h3 class="font-semibold text-lg mb-4">Usługi</h3>
            <ul class="space-y-2 text-gray-300">
              <li>Naprawa po zalaniu</li>
              <li>Reballing i lutowanie</li>
              <li>Reballing chipów</li>
              <li>Skup laptopów na części</li>
            </ul>
          </div>
          
          <div>
            <h3 class="font-semibold text-lg mb-4">Kontakt</h3>
            <div class="space-y-2 text-gray-300">
              <p>📞 +48 123 456 789</p>
              <p>📧 yury@laptops.pl</p>
              <p>📍 Warszawa, Polska</p>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Serwis Laptopów Yury. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  </div>
</template>
