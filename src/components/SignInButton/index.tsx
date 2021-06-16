import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';
import { signIn, useSession, signout } from 'next-auth/client';

export function SignInButton() {
  const [session] = useSession();

  return session ? (
    <button className={styles.signInButton}>
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="#737380" onClick={() => signout()} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signIn('github')}
    >
      <FaGithub color="#eba417" />
      Sign in Github
    </button>
  );
}
