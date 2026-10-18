# 意思決定記録（DR）

意思決定記録（DR）は、重要な選択を、その背景と結果とともに、発議し、議論し、保管するための方法です。

目次：

- [意思決定記録とは？](#意思決定記録とは)
- [意思決定記録のテンプレート](#意思決定記録のテンプレート)
- [意思決定記録の使い始め方](#意思決定記録の使い始め方)
- [なぜ意思決定記録は単なるメモより優れているのか？](#なぜ意思決定記録は単なるメモより優れているのか)
- [ツールを使って意思決定記録を使い始める方法](#ツールを使って意思決定記録を使い始める方法)
- [AI スキル](#ai-スキル)
- [良い意思決定記録を書くための提案](#良い意思決定記録を書くための提案)
- [意思決定記録のチームワークに関するアドバイス](#意思決定記録のチームワークに関するアドバイス)
- [意思決定記録のチームワークに関する質問](#意思決定記録のチームワークに関する質問)
- [詳しい情報](#詳しい情報)

このリポジトリの内容：

- [ガイド](ガイド) - 意思決定記録とは何か、なぜ使われるのか、ライフサイクル、ガバナンスなど。
- [テンプレート](テンプレート) - Markdown 形式とステップごとの提案を備えた、コピー＆ペースト用のテンプレート。
- [チュートリアル](チュートリアル) - 手を動かしながら進める段階的な解説：20 分足らずで最初の意思決定記録を書きます。
- [事例](事例) - 戦略、営業、マーケティング、製品、人事、リスク、プロジェクト、技術の意思決定にわたる、出発点となる事例（確定した決定ではなく、作業中のもの）。
- [チェックリスト](チェックリスト)：書くべきかどうかの判断、上手な書き方、レビュー、そして組織全体でこの実践を運用するためのチェックリスト。
- [ヘルプ](ヘルプ) — これを導入するときにリーダーがよく挙げる疑問に対する FAQ、トラブルシューティング、用語集。
- [spec](https://github.com/decision-records/decision-records/tree/main/spec) — このリポジトリの仕様：構成、コンテンツ、ロケール、ウェブサイト、エージェント。
- [locales](https://github.com/decision-records/decision-records/tree/main/locales) — コンテンツ。ロケールごとに 1 つのディレクトリがあり、`en-us` が英語の正本です。
- [skills](https://github.com/decision-records/decision-records/tree/main/skills) — このリポジトリのテンプレートとチェックリストを AI アシスタント内で活用する Claude Skills：1 つは意思決定記録を書くため、もう 1 つはこのリポジトリを保守するためのものです。
- [decision-records.github.io](https://github.com/decision-records/decision-records/tree/main/decision-records.github.io) — [decision-records.github.io](https://decision-records.github.io) の SvelteKit 3 ソース。上記のスキルを紹介しています。

## 意思決定記録とは？

**意思決定記録**（DR）は、重要な選択を、その背景と結果とともに、発議し、議論し、保管するための方法です。

**意思決定ログ**（DL）は、特定のプロジェクト（または組織）のために作成・保守されるすべての DR の集まりです。

この文脈での**決定**とは、重要な要件に対処する組織の選択のことです。

**重要な要件**（SR）とは、プロジェクトのシステムに測定可能な影響を与える、プロジェクトの必要事項のことです。

これらの用語はすべて、**ナレッジマネジメント**（KM）というトピックに含まれます。

この文書の目的は、意思決定記録を手早く概観できるようにすることです。

## 意思決定記録は組織の働き方の一つです

元に戻すのが難しい選択、他の人に影響する選択、後で問われる選択には、意思決定記録が向いています。

- 戦略：市場への参入や撤退、成長重視か収益性重視かの姿勢、3 年先への賭けの設定
- 営業：テリトリーモデルの変更、CRM の選定、報酬体系の再編
- マーケティング：ブランドの再ポジショニング、チャネルミックスの選択、代理店かインハウスかの選択
- 製品：価格モデルの設定、内製か購入かの選択、機能や製品ラインの終了
- 財務：資金調達構造の選択、資本配分方針の設定
- 人事：リモートワーク方針の設定、等級制度や報酬バンドの再設計
- リスクと法務：特定のリスクの受容・低減・移転、ベンダー集中度の上限の選択
- 運用：内製か購入か、インソースかアウトソースか、デリバリー方法論の選択
- 広報：危機対応コミュニケーションの姿勢の選択、メディア対応方針の設定
- 人材開発：昇進や研修投資の方針の設定
- 技術：クラウドプロバイダーやデータベース、統合パターン、ソフトウェア方法論の選択

1 年後にチームの誰かが「ところで、なぜこのやり方にしたのだろう？」と尋ねる場面を想像できるなら、その決定は意思決定記録の候補です。

## 意思決定記録のテンプレート

[テンプレート](テンプレート/index.md)のファイルをご覧ください。次の主要なセクションを使います。

- **タイトル**：現在形の命令形で、50 文字以内の短いもの。

- **ステータス**：コメント募集中 | 提案中 | 承認済み | 却下 | 非推奨 | 置き換え済み

- **課題**：取り上げたい課題を説明し、なぜ取り上げるのかについて疑問を残さないようにします。

- **前提**：前提、仮定、プロジェクト横断の要件などを説明します。

- **制約**：この決定が環境にもたらしうる制約を記録します。

- **ポジション**：候補となる選択肢を、意見ではなく事実とデータとして列挙します。

- **意見**：チームやステークホルダー、さらに第三者のアドバイザーやレビュアーによるもの。

- **選択**：なぜあるポジションを選んだのかを、目的と説明責任とともに説明します。

- **影響**：変更の必要性など、決定がもたらす影響を述べます。

- **関連**：参考資料、プロジェクト横断の作業、後続のニーズなど。

## 意思決定記録の使い始め方

意思決定記録を使い始めるには、チームメイトと次の領域について話し合いましょう。

決定の特定：

- その決定はどれほど緊急で、どれほど重要か？

- 今すぐ決めなければならないのか、それとももっと情報が集まるまで待てるのか？

- 個人の経験と集団の経験、そして認められた設計手法や実践のどちらも、決定の特定に役立ちます。

- 理想的には、プロダクトの ToDo リストを補完する決定の ToDo リストを維持します。

意思決定：

- 一般的なものもソフトウェア固有のものも含め、意思決定の手法は数多くあります。たとえばダイアログマッピングです。

- グループでの意思決定は、活発に研究されているテーマです。

決定の実施と徹底：

- 決定は、システムに資金を出し、開発し、運用するステークホルダーに伝えられ、受け入れられなければなりません。

- アーキテクチャが読み取れるコーディングスタイルと、アーキテクチャ上の懸念や決定に着目したコードレビューは、関連する 2 つの実践です。

- システムを進化させる、アップグレードする、要件の変化に合わせて調整するといった大きな変更を行うときは、決定を見直すことができます。

決定の共有（任意）：

- 多くの決定はプロジェクトをまたいで繰り返し現れます。

- したがって、過去の決定に関する経験は、良いものも悪いものも、明確なナレッジマネジメント戦略を採るときに再利用できる貴重な資産になります。

- グループでの意思決定は、活発に研究されているテーマです。

決定の文書化：

- 決定の計画と記録のために、多くのテンプレートとツールがあります。

- アジャイルのコミュニティを参照してください。たとえば M. Nygard のアーキテクチャ決定記録です。

- 従来のソフトウェア工学やアーキテクチャ設計のプロセスを参照してください。たとえば IBM UMF や、CapitalOne の Tyree と Akerman が提案した表のレイアウトです。

決定のガイダンス：

- 上記の手順は、Wikipedia の [Architectural Decision](https://en.wikipedia.org/wiki/Architectural_decision) の項目を採用したものです。

- 一般的なものも、ソフトウェアやソフトウェアアーキテクチャ固有のものも含め、意思決定の手法は数多くあります。たとえばダイアログマッピングです。

## なぜ意思決定記録は単なるメモより優れているのか？

意思決定記録は、自由形式のメモに一定の構造を加えます。

意思決定記録のテンプレートは、網羅すべき項目のリストを加え、それがチェックリストの役割を果たします。

重要な成果は、チームが意思決定記録とテンプレートを使ってチームワークを改善できることです。意思決定記録とテンプレートはどちらもチェックリストとして働き、チームが漏れなく押さえ、効率的かつ効果的にコミュニケーションをとる助けになります。

意思決定記録の利点は、チームの規模、プロジェクトの拡大、統合の機会、ステークホルダーの関与、長期的な保守、時間の経過に伴う進化とともに大きくなる傾向があります。

たとえば私たちは、大規模なチーム、複数の部門、複数のパートナー組織、複数年にわたるプロジェクト、数百万ドル規模の予算で意思決定記録を使っています。これほどの規模と範囲では、自由形式のメモよりも、ある種の構造化されたコミュニケーションを好みます。

実際には、意思決定記録はリモートのチームメイトの参加を促し、非同期のコミュニケーションを増やし、選択肢の評価をより効率的にし、その後の要約を増やすため、私たちはそれを好んで使っています。これらの側面はすべて、決定が明確で、完全で、簡潔で、記録されているため、新しいチームメイトのオンボーディングにも役立ちます。

## ツールを使って意思決定記録を使い始める方法

ツールを使った意思決定記録は、好きな方法で始められます。

たとえば次のとおりです。

- Google ドライブと Google ドキュメントが好きなら、`decisions` フォルダーを作り、意思決定記録ごとに 1 つのドキュメントを作ります。

- ソースコードのバージョン管理が好きなら、`decisions` ディレクトリを作り、意思決定記録ごとに 1 つのテキストファイルを作ります。

- Atlassian Jira のようなプロジェクト計画ツールが好きなら、そのツールの計画用トラッカーを使います。

- MediaWiki のような wiki が好きなら、意思決定記録用の wiki を作り、意思決定記録ごとに 1 つの wiki ページを作ります。

## AI スキル

[Claude Code](https://claude.com/claude-code) や、[Claude Skills](https://code.claude.com/docs/en/skills) に対応した他のエージェントを使っている場合、このリポジトリは [skills](https://github.com/decision-records/decision-records/tree/main/skills) に 2 つの AI スキルを同梱しています。

- [decision-records-skill](https://github.com/decision-records/decision-records/tree/main/skills/decision-records-skill) — 意思決定記録を書くすべての人向け。選択に記録が必要かどうかの判断、軽量版か包括版のテンプレートの選択、下書き、保管、公開前のチェックリストまでを順に案内します。

- [decision-records-maintainer-skill](https://github.com/decision-records/decision-records/tree/main/skills/decision-records-maintainer-skill) — このリポジトリ自体の保守担当者向け。事例の追加、事例の索引と相互参照の整合性の維持、このリポジトリのファイル規約を扱います。

どちらかを使うには、このリポジトリをクローンし、使いたいスキルのフォルダーを、エージェントがプロジェクトのスキルを読み込む場所（Claude Code では通常、自分のプロジェクトの `.claude/skills/<name>`）にコピーしてから、アシスタントにそれを使うよう頼みます。詳しくは [decision-records.github.io/skills](https://decision-records.github.io/skills/) を、そのページのソースは [decision-records.github.io](https://github.com/decision-records/decision-records/tree/main/decision-records.github.io) をご覧ください。

## 良い意思決定記録を書くための提案

良い意思決定記録の特徴：

- 時点の明示 - 決定がいつ行われたかを明らかにする

- 合理性 - その決定をした理由を説明する。

- 不変の記録 - すでに公開された意思決定記録にある決定は、変更しない。

- 具体性 - 1 つの意思決定記録は 1 つの決定について書く。

意思決定記録における良い背景の特徴：

- 組織の状況とビジネス上の優先事項を説明する

- チームの社会的な構成やスキルの構成に基づく根拠と考慮事項を含める。

意思決定記録における良い結果の特徴：

- 正しいアプローチ - 「Y ではなく X を始める必要があります」

- 誤ったアプローチ - その決定を、特定の AD を行ったことの「長所」と「短所」で説明しない

新しい意思決定記録が以前の意思決定記録に取って代わることがあります。

- 以前の意思決定記録を置き換える、または無効にする決定が行われたときは、新しい決定を作成し、古い決定を参照します。

## 意思決定記録のチームワークに関するアドバイス

チームで意思決定記録を使うことを検討しているなら、多くのチームと仕事をする中で私たちが学んだ助言を紹介します。

「何を」を義務づけるのではなく、「なぜ」を一緒に話し合うことで、チームメイトを導く機会があります。たとえば、意思決定記録は、チームがより賢く考え、より良くコミュニケーションするための方法です。後から強制される事務作業にすぎないなら、意思決定記録に価値はありません。

チームによっては、「意思決定記録」という略称よりも「決定」という名前をはるかに好みます。あるチームがディレクトリ名に「decisions」を使うと、電球が灯ったようにチームがそのディレクトリにより多くの情報を入れ始めます。たとえばベンダーの決定、計画の決定、スケジュールの決定などです。これらすべての情報に同じテンプレートを使えます。私たちは、人は略語（「意思決定記録」）よりも言葉（「決定」）のほうが速く学べること、「記録」という言葉を外すと作業中のドキュメントを書く意欲が高まること、そして開発者やマネージャーの中には「アーキテクチャ」という言葉を嫌う人もいることを、仮説として立てています。

理論上は、不変性が理想です。実際には、可変であるほうが私たちのチームではうまくいっています。既存の意思決定記録に新しい情報を、日付のスタンプと、その情報が決定の後に届いたことを示す注記とともに挿入します。この方法は、全員が更新できる「生きたドキュメント」につながります。典型的な更新は、新しいチームメイトや新しいサービス、利用による現実の結果、ベンダーの機能・料金プラン・ライセンス契約といった事後的な第三者の変更によって情報が得られたときです。

## 意思決定記録のチームワークに関する質問

### 誰が意思決定記録を作成できるか？

特定の人、特定の役割、特定のチーム、特定の部門といった領域を検討しましょう。また、意思決定記録を依頼できる、つまり別の人が執筆する記録を求めることができる人、役割、チーム、部門があるかどうかも検討します。

回答例：アーキテクチャ決定記録の README ページを読んだ組織内のすべての人が意思決定記録を提案できます。つまり、書き始めてチームと共有できます。

### 意思決定記録を起こす正当な理由は何か？

組織のチームの働き方、ソフトウェアシステムの構造、チーム間の調整、長期的な保守性、外部インターフェース、誰に利益をもたらしたいかといった領域を検討しましょう。

回答例：将来の開発者に、私たちが行っていることの「なぜ」を理解してほしいときに、意思決定記録を作成します。

### 意思決定記録を起こさない正当な理由は何か？

アーキテクチャに関するものではない決定、リスクが最小である、自己完結している、開発者が 1 人だけといった小さな決定、標準や方針やドキュメントなどですでに他の場所で十分にカバーされている決定、回避策や概念実証や実験のように一時的な決定といった領域を検討しましょう。

回答例：決定が範囲、期間、リスク、コストの点で限定的である場合や、すでに他で扱われている場合は、意思決定記録を省略します。

### 意思決定記録のライフサイクルとは？

作成プロセス、調査プロセス、意思決定プロセス、実施プロセス、終了プロセスといった領域を検討しましょう。意思決定記録のライフサイクルを時間の経過に沿ってどう追跡するか、たとえば記録をある状態から次の状態へどう移すか、そしてそれをステークホルダーにどう伝えるかを検討します。

回答例：意思決定記録には 5 つのライフサイクル段階を設けたいと考えています：開始 → 調査 → 評価 → 実施 → 保守 → 終了。

### 意思決定記録のライフサイクルの各ステップの基準は何か？

意思決定記録の受け入れ基準、つまりライフサイクルの次のステップへ進めるほど十分に良いとどう判断するかといった領域を検討しましょう。問題は明確に述べられているか？ 代替案は検討されたか？ トレードオフは十分に理解され、文書化されているか？
関連するすべての背景は揃っているか？ 関連するすべてのステークホルダーが関わっているか？ すべてのフィードバックが反映されたか？

回答例：アクティブなチームが 1) 調査を完了し、2) 評価を完了し、3) コメント募集と 1 週間のタイムボックスを付けて意思決定記録の提案をステークホルダーに公開し、4) すべてのステークホルダーのコメントが取り込まれて対処されたとき、意思決定記録をステークホルダーによる投票にかけたいと考えています。

### 意思決定記録にはどのような役割と責任が関わるか？

提案者、調査者、評価者、レビュアー、承認者、保守担当者などの役割を検討しましょう。ステークホルダーとのコミュニケーション、期待が満たされていることの確認、ウェブサイトやイントラネットでの共有、定期的な、とくに関連する変更があったときの作業の見直しといった責任を検討します。

回答例：各意思決定記録には、常に主担当者、副担当者、説明責任を負うチームを置きたいと考えています。彼らは、コミュニケーション、公開、保守、少なくとも年に 1 回の定期レビュー、そして必要に応じた最終的な終了に責任を持ちます。

### ガバナンスは意思決定記録とどう関わるか？

組織の働き方、法務や人事の面での特別なコンプライアンス上の必要性、合意と対立とエスカレーションをどう扱いたいかといった領域を検討しましょう。意思決定記録について、承認、投票、拒否権の行使などで、他より大きな影響力を持てる領域や人やチームはあるでしょうか？

回答例：意思決定記録のガバナンスは次の優先順位です：CEO、CTO、CLO、意思決定記録を実施するチーム、その ADD について最も詳しいチームの専門家。意思決定記録に記載がない限り、他の誰にもガバナンスはありません。

### どのような原則が意思決定記録と関わるか？

素早く動くか慎重に動くか、意思決定の合意か対立か、リスク選好か安全選好か、公開の議論か非公開の議論かといった、組織の働き方に含まれる領域を検討しましょう。

回答例：私たちは、行動への偏り、反対してもコミットする、容易に元へ戻せて容易に切り離せる決定なら 70% の見積りで十分、そして組織の秘密保持契約に記載された機密情報を除く公開での働き方というリーダーシップ原則を用います。

## 詳しい情報

はじめに：

- [Architectural decision (wikipedia.org)](https://wikipedia.org/wiki/Architectural_decision)

- [Architecturally significant requirements (wikipedia.org)](https://wikipedia.org/wiki/Architecturally_significant_requirements)

テンプレート：

- [Documenting architecture decisions - Michael Nygard (thinkrelevance.com)](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

- [Markdown Architectural Decision Records (adr.github.io)](https://adr.github.io/madr/)

- [Template for documenting architecture alternatives and decisions (stackoverflow.com)](http://stackoverflow.com/questions/7104735/template-for-documenting-architecture-alternatives-and-decisions)

詳細：

- [ADMentor XML project (github.com)](https://github.com/IFS-HSR/ADMentor)

- [Architectural Decision Guidance across Projects: Problem Space Modeling, Decision Backlog Management and Cloud Computing Knowledge (ifs.hsr.ch)](https://www.ifs.hsr.ch/fileadmin/user_upload/customers/ifs.hsr.ch/Home/projekte/ADMentor-WICSA2015ubmissionv11nc.pdf)

- [The Decision View's Role in Software Architecture Practice (computer.org)](https://www.computer.org/csdl/mags/so/2009/02/mso2009020036-abs.html)

- [Documenting Software Architectures: Views and Beyond (resources.sei.cmu.edu)](http://resources.sei.cmu.edu/library/asset-view.cfm?assetID=30386)

- [Architecture Decisions: Demystifying Architecture (utdallas.edu)](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf)

- [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records (thoughtworks.com)](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)

- [A Skeptic’s Guide to Software Architecture Decisions (infoq.com)](https://www.infoq.com/articles/architecture-skeptics-guide/)

- [Architectural Decisions — The Making Of](https://ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html)

- [Architectural Retrospectives: the Key to Getting Better at Architecting](https://www.infoq.com/articles/architectural-retrospectives/)

- [Software Architecture Monday with Mark Richards](https://developertoarchitect.com/lessons/) - 毎月無料のソフトウェアアーキテクチャのレッスン

ツール：

- [Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)

- [Command line tools with python - by Victor Sluiter](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/)

- [Architectural Design Decision Support Framework (ADvISE)](https://swa.univie.ac.at/Software_Architecture/research-projects/architectural-design-decision-support-framework-advise/)

企業固有のガイダンス：

- [Amazon: AWS Prescriptive Guidance: ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

- [GitHub: ADR GitHub organization](https://adr.github.io/)

- [RedHat: Why you should use ADRs](https://www.redhat.com/architect/architecture-decision-records)

事例：

- [Repository of Architecture Decision Records made for the Arachne Framework](https://github.com/arachne-framework/architecture)

動画：

- [The C4 model for visualising software architecture - by Simon Brown](https://www.youtube.com/watch?v=KvoBrUd1-5E)

ポッドキャスト：

- [Software Architecture Bookclub Podcast](https://www.developertoarchitect.com/bookclub-podcast.html)

書籍：

- [Software Architecture Metrics: Case Studies to Improve the Quality of Your Architecture - by Christian Ciceri, Dave Farley, Neal Ford, Andrew Harmel-Law, Michael Keeling and Carola Lilienthal](https://www.amazon.com/Software-Architecture-Metrics-Christian-Ciceri-ebook/dp/B0B1NZ8Z5V)

- [Software Systems Architecture: Working With Stakeholders Using Viewpoints and Perspectives - by Nick Rozanski and Eoin Woods](https://www.amazon.com/Software-Systems-Architecture-Stakeholders-Perspectives/dp/032171833X)

- [Software Architecture in Practice (SEI Series in Software Engineering)](https://www.amazon.com/Software-Architecture-Practice-SEI-Engineering-ebook/dp/B094CPJ96B)

- [Documenting Software Architectures: Views and Beyond (SEI Series in Software Engineering)](https://www.amazon.com/Documenting-Software-Architectures-Beyond-Engineering-ebook/dp/B0046XS3RO)

- [The Software Architect Elevator: Redefining the Architect's Role in the Digital Enterprise](https://www.amazon.com/Software-Architect-Elevator-Redefining-Architects-ebook/dp/B086WQ9XL1)

- [Fundamentals of Software Architecture: An Engineering Approach - by Mark Richards and Neal Ford](https://www.amazon.com/Fundamentals-Software-Architecture-Engineering-Approach-ebook/dp/B0849MPK73)

- [Building Evolutionary Architectures - by Neal Ford, Rebecca Parsons, Patrick Kua, Pramod Sadalage](https://www.amazon.com/Building-Evolutionary-Architectures-Neal-Ford-ebook/dp/B0BN4T1P27?crid=37FA31IFLAS0Z)

- [Foundations of Decision Analysis by Ronald Howard and Ali Abbas](https://www.amazon.com/Foundations-Decision-Analysis-Ronald-Howard-ebook/dp/B00SZECJTI?crid=14BK5SDP76UN6)

- [Head First Software Architecture - by Raju Gandhi, Neal Ford and Mark Richards](https://www.amazon.com/Head-First-Software-Architecture-Architectural-ebook/dp/B0CW1JMNF2)

- [Communication Patterns: A Guide for Developers and Architects - by Jacqui Read](https://www.amazon.com/Communication-Patterns-Guide-Developers-Architects/dp/1098140540)

関連項目：

- REMAP (Representation and Maintenance of Process Knowledge)

- DRL (Decision Representation Language)

- IBIS (Issue-Based Information System)

- QOC (Questions, Options, and Criteria)

- IBM’s e-Business Reference Architecture Framework
