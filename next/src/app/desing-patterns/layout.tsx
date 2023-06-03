import Link from 'next/link';
import React from 'react'

const DesignPatternsLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>
        <li> <Link href="/desing-patterns/strategy">Strategy</Link></li>
        <li><Link href="/desing-patterns/singleton">Singleton</Link></li>
        <li><Link href="/desing-patterns/status">Status</Link></li>
        <li><Link href="/desing-patterns/brigde">Brigde</Link></li>
        <li><Link href="/desing-patterns/factory">Factory</Link></li>
      </nav>

      <div className="desing-patterns-container">
        {children}
      </div>

    </section>
  )
}

export default DesignPatternsLayout