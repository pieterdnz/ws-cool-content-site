export const Form = () => (
  <form className="p-4 mx-auto bg-gray-200 rounded-md md:p-8">
    <header className="pb-4">
      <h2 className="mb-2 text-xl font-bold leading-tight md:text-2xl">
        Follow along
      </h2>
      <p className="text-base">
        Drop your name and email below to get updates when I post.
      </p>
    </header>
    <section className="flex flex-col flex-wrap text-sm">
      <div className="flex flex-col mb-4 space-y-2 md:flex-row md:space-y-0">
        <input
          type="text"
          className="flex-1 px-3 py-2 text-sm text-black rounded-lg md:mr-2 md:flex-auto focus:border focus:border-blue-500"
          name="firstName"
          placeholder="First Name"
          required
        />
        <input
          type="email"
          className="flex-1 px-3 py-2 text-sm text-black rounded-lg md:flex-auto focus:border focus:border-blue-500"
          name="email"
          placeholder="Email"
          required
        />
      </div>
      <button
        className="inline-flex justify-center items-center w-full px-4 py-2 font-semibold text-white transition-colors duration-100 ease-in-out bg-blue-500 hover:bg-blue-600 rounded-lg shadow-xl md:w-auto disabled:cursor-not-allowed"
        type="submit"
      >
        Subscribe
      </button>
    </section>
    <p className="mt-4 text-xs text-center">
      You will never receive spam. Unsubscribe at any time.
    </p>
  </form>
);
