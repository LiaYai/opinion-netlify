import React from 'react';

const About: React.FC = () => (
  <section className="max-w-4xl mx-auto p-6">
    <header>
      <h1 className="text-xl sm:text-2xl text-primary my-5 text-center font-bold">
        Приветствуем вас на сайте Проекта &quot;Здравый смысл&quot;.
      </h1>
    </header>
    <article>
      <p className="text-base sm:text-lg my-2">
        У нас можно свободно говорить, но за базаром нужно следить и поменьше
        болтать.
      </p>
      <p className="text-base sm:text-lg my-2">
        У нас не принято рыться в грязном белье и свои недостатки выставлять на
        показ, если не по делу и не к месту.
      </p>
      <p className="text-base sm:text-lg my-2">
        Это наш свободный выбор, не прыгать под лозунги &quot;Хотим в
        Европу&quot;, по нашему плану - здесь будет Россия!
      </p>
      <p className="text-base sm:text-lg my-2">
        Наша цель – борьба с мошенниками и пропагандистами.
      </p>
      <p className="text-base sm:text-lg my-2">
        Наш путь – развитие, ибо мироздание другого пути не знает.
      </p>
      <p className="text-base sm:text-lg my-2">
        Наш метод – автономия разума, о нём мы вам и расскажем.
      </p>
    </article>
  </section>
);

export default React.memo(About);
