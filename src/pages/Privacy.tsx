export function PrivacyPage() {
  return (
    <div className="space-y-12">
      {/* 히어로 */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold">개인정보처리방침</h1>
        <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
          8ocket은 고객의 개인정보를 소중히 보호합니다
        </p>
      </section>

      {/* 본문 */}
      <section className="max-w-4xl mx-auto space-y-8">
        <article className="space-y-4">
          <h2 className="text-base font-bold">제1조 (개인정보의 수집 및 이용 목적)</h2>
          <p className="text-muted-foreground leading-relaxed">
            회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>서비스 제공 및 계약의 이행</li>
            <li>회원 관리 및 본인 확인</li>
            <li>고객 문의 및 불만 처리</li>
            <li>서비스 개선 및 신규 서비스 개발</li>
          </ul>
        </article>

        <article className="space-y-4">
          <h2 className="text-base font-bold">제2조 (수집하는 개인정보의 항목)</h2>
          <p className="text-muted-foreground leading-relaxed">
            회사는 서비스 제공을 위해 최소한의 개인정보만을 수집합니다.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>필수항목: 이름, 이메일 주소, 연락처</li>
            <li>선택항목: 회사명, 직책</li>
            <li>자동 수집 항목: 접속 IP, 쿠키, 서비스 이용 기록</li>
          </ul>
        </article>

        <article className="space-y-4">
          <h2 className="text-base font-bold">제3조 (개인정보의 보유 및 이용 기간)</h2>
          <p className="text-muted-foreground leading-relaxed">
            회사는 법령에 따른 개인정보 보유·이용 기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용 기간 내에서 개인정보를 처리·보유합니다.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>회원 정보: 회원 탈퇴 시까지</li>
            <li>계약 또는 청약철회 기록: 5년</li>
            <li>대금결제 및 재화 등의 공급 기록: 5년</li>
            <li>소비자 불만 또는 분쟁 처리 기록: 3년</li>
          </ul>
        </article>

        <article className="space-y-4">
          <h2 className="text-base font-bold">제4조 (개인정보의 제3자 제공)</h2>
          <p className="text-muted-foreground leading-relaxed">
            회사는 정보주체의 개인정보를 제1조에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-base font-bold">제5조 (정보주체의 권리·의무)</h2>
          <p className="text-muted-foreground leading-relaxed">
            정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>개인정보 열람 요구</li>
            <li>오류 등이 있을 경우 정정 요구</li>
            <li>삭제 요구</li>
            <li>처리 정지 요구</li>
          </ul>
        </article>

        <article className="space-y-4">
          <h2 className="text-base font-bold">제6조 (개인정보의 안전성 확보 조치)</h2>
          <p className="text-muted-foreground leading-relaxed">
            회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>개인정보 취급 직원의 최소화 및 교육</li>
            <li>개인정보에 대한 접근 제한</li>
            <li>개인정보의 암호화</li>
            <li>해킹 등에 대비한 기술적 대책</li>
          </ul>
        </article>

        <article className="space-y-4">
          <h2 className="text-base font-bold">제7조 (개인정보 보호책임자)</h2>
          <p className="text-muted-foreground leading-relaxed">
            회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만 처리 및 피해 구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
          </p>
          <div className="bg-muted/30 p-4 rounded-lg text-muted-foreground">
            <p>개인정보 보호책임자</p>
            <p>이메일: privacy@8ocket.com</p>
            <p>전화: 02-1234-5678</p>
          </div>
        </article>

        <article className="space-y-4">
          <h2 className="text-base font-bold">부칙</h2>
          <p className="text-muted-foreground leading-relaxed">
            이 개인정보처리방침은 2026년 1월 1일부터 적용됩니다.
          </p>
        </article>
      </section>
    </div>
  );
}
