import { useState } from 'react';
import Link from 'next/link'
import styles from '@/styles/Navbar.module.css';
import { EmailService } from './email_service';

const FormSubmitResult = ({ status }) => {
  if (status === null) {
    return <></>;
  }

  const klass = status === 'success' ? styles.success : styles.failure;
  const message = status === 'success' ? "Success! You will receive your results shortly" : "Oh no! Something went wrong. Please try again later.";

  return (
    <div className={klass}>{message}</div>
  );
}

export default function Navbar({ emailMessage, emailFeature }) {
  const [resultsStatus, setResultsStatus] = useState(null);

  return (
    <nav>
      <div>
        { emailFeature === true ?
          <div className={styles.navbar_with_email}>
            <div className={styles.email}>
              <p>email your results</p>
              <EmailService
                message={emailMessage}
                setResultsStatus={setResultsStatus}
              />
            </div>
            <Link href='/' className={styles.tag}>Exit</Link>
          </div>
          :
          <div className={styles.navbar_simple}>
            <Link href='/' className={styles.tag}>Exit</Link>
          </div>
        }
      </div>

      <FormSubmitResult status={resultsStatus} />
    </nav>
  )
}
