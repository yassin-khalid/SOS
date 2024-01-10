import BackHomeButton from "@/components/BackHomeButton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTranslation } from "react-i18next";

const TermsPage = ({
  terms,
}: {
  terms: "customer-terms" | "service-terms";
}) => {
  const { t, i18n } = useTranslation();
  const { title, description, table, definitions } = t(terms, {
    returnObjects: true,
  }) as {
    title: string;
    description: string;
    table: { header: string[]; body: { term: string; meaning: string }[] };
    definitions: { title: string; p1?: string; list?: string[] }[];
  };

  return (
    <>
      <BackHomeButton />
      <div
        className="px-4 lg:px-0 max-w-4xl mx-auto mb-20"
        dir={i18n.resolvedLanguage === "ar" ? "rtl" : "ltr"}
      >
        <h2
          className={`text-center text-2xl font-bold mb-6 ${
            i18n.resolvedLanguage === "ar" ? "font-arabic" : "font-display"
          }`}
        >
          {title}
        </h2>
        <p className="mb-3.5">{description}</p>
        <ol>
          {definitions.map(({ title, p1, list }, i) => (
            <li key={i} className="mb-4">
              <h3
                className={`font-medium text-primary mb-2 text-start ${
                  i18n.resolvedLanguage === "ar"
                    ? "font-arabic"
                    : "font-display"
                }`}
              >{`${i + 1}- ${title}`}</h3>
              <p className="mb-1 text-start">{p1}</p>
              {i === 0 && (
                <Table>
                  <TableHeader>
                    <TableRow>
                      {table.header.map((h) => (
                        <TableHead className="text-start">{h}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {table.body.map((b) => (
                      <TableRow>
                        <TableCell>{b.term}</TableCell>
                        <TableCell>{b.meaning}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
              {list && (
                <ul className="list-disc ms-6">
                  {list.map((list, i) => (
                    <li key={i} className="text-start">
                      {list}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default TermsPage;
